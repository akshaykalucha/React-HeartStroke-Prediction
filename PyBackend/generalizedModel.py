import statsmodels.api as sm
import numpy as np
from sklearn.base import BaseEstimator, ClassifierMixin
import pandas as pd


class BaseGLM(BaseEstimator, ClassifierMixin):
    """
    Base class for GLM
    Binary and Regression GLM inherit from here
    """

    def __init__(self, family, binomial_link, gamma_link, gaussian_link, inverse_gaussian_link, poisson_link,
                 negative_binomial_link, tweedie_link, alpha, power, var_power):

        self.family = family
        self.binomial_link = binomial_link
        self.gamma_link = gamma_link
        self.gaussian_link = gaussian_link
        self.inverse_gaussian_link = inverse_gaussian_link
        self.poisson_link = poisson_link
        self.negative_binomial_link = negative_binomial_link
        self.tweedie_link = tweedie_link
        self.link = None
        self.alpha = alpha
        self.power = power
        self.var_power = var_power
        self.fit_intercept = True
        self.intercept_scaling = 1
        self.fitted_model = None
        self.coef_ = None
        self.intercept_ = None
        self.classes_ = None

    def get_link_function(self):
        """
        gets the statsmodel link function based on the
        user defined link on the model training screen
        """
        links_dict = {
            'cloglog': sm.families.links.cloglog(),
            'log': sm.families.links.log(),
            'logit': sm.families.links.logit(),
            'negative_binomial': sm.families.links.NegativeBinomial(self.alpha),
            'power': sm.families.links.Power(self.power),
            'cauchy': sm.families.links.cauchy(),
            'identity': sm.families.links.identity(),
            'inverse_power': sm.families.links.inverse_power(),
            'inverse_squared': sm.families.links.inverse_squared()
        }

        return links_dict[self.link]

    def set_link_str(self):
    
        link_str_dict = {
            'binomial': self.binomial_link,
            'gamma': self.gamma_link,
            'gaussian': self.gaussian_link,
            'inverse_gaussian': self.inverse_gaussian_link,
            'poisson': self.poisson_link,
            'negative_binomial': self.negative_binomial_link,
            'tweedie': self.tweedie_link
        }
        self.link = link_str_dict[self.family]

    def get_family(self, link):
        """
        takes in user defined family variable
        and statsmodel link function
        returns the family
        """
        if self.family == 'binomial':
            return sm.families.Binomial(link=link)

        elif self.family == "gamma":
            return sm.families.Gamma(link=link)

        elif self.family == "gaussian":
            return sm.families.Gaussian(link=link)

        elif self.family == "inverse_gaussian":
            return sm.families.InverseGaussian(link=link)

        elif self.family == "negative_binomial":
            return sm.families.NegativeBinomial(link=link, alpha=self.alpha)

        elif self.family == "poisson":
            return sm.families.Poisson(link=link)

        elif self.family == "tweedie":
            return sm.families.Tweedie(link=link, var_power=self.var_power)
        else:
            raise ValueError("Unsupported family")


class BinaryClassificationGLM(BaseGLM):
    
    def fit(self, X, y):
        """
        takes in training data and fits a model
        """

        self.classes_ = list(set(y))

        X = sm.add_constant(X)

        #  returns statsmodel link and distribution functions based on user input
        self.set_link_str()
        link = self.get_link_function()
        family = self.get_family(link)

        #  fits and stores statsmodel glm
        model = sm.GLM(y, X, family=family)
        self.fitted_model = model.fit()

        #  adds attributes for explainability
        self.coef_ = np.array(self.fitted_model.params[1:]).reshape(1,
                                                                    -1)  # removes first value which is the intercept
        self.intercept_ = np.array(self.fitted_model.params[0]).reshape(-1)

    def predict(self, X):
        """
        Returns the binary target
        """

        X = sm.add_constant(X, has_constant='add')

        # makes predictions and converts to DSS accepted format
        y_pred = np.array(self.fitted_model.predict(X))
        y_pred_final = y_pred.reshape((len(y_pred), -1))

        return y_pred_final > 0.5

    def predict_proba(self, X):
        """
        Return the prediction proba
        """
        #  adds a constant
        X = sm.add_constant(X, has_constant='add')

        # makes predictions and converts to DSS accepted format
        y_pred = np.array(self.fitted_model.predict(X))
        y_pred_final = y_pred.reshape((len(y_pred), -1))

        # returns p, 1-p prediction probabilities
        return np.append(1 - y_pred_final, y_pred_final, axis=1)


class RegressionGLM(BaseGLM):
    
    def fit(self, X, y):
        """
        takes in training data and fits a model
        """

        self.classes_ = list(set(y))

        X = sm.add_constant(X)
        self.set_link_str()
        #  returns statsmodel link and distribution functions based on user input
        link = self.get_link_function()
        family = self.get_family(link)

        #  fits and stores statsmodel glm
        model = sm.GLM(y, X, family=family)
        self.fitted_model = model.fit()

        #  adds attributes for explainability
        # intercept cant be multidimensional np array like in classification
        # as scoring_base.py func compute_lm_significant hstack method will fail
        self.coef_ = np.array(self.fitted_model.params[1:])  # removes first value which is the intercept
        self.intercept_ = float(self.fitted_model.params[0])

