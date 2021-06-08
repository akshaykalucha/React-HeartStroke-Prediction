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

