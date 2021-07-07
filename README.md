The dataset contains medical records of 299 patients who had heart failure, collected during their follow-up period, where each patient profile has 13 clinical features.

### Experiment Results:
* **Data Analysis**
    * 5 columns contains outliers this columns are ( creatitinine_phosphokinase, ejection_fraction, platelets, sereum_creatinine, serum_soidum).
    * Imbalanced target class ( I'll used resampling techniques to add more copies of the minority class )
 * **Performance Evaluation**
    * Splitting the dataset by 80 % for training set and 20 % validation set.
 * **Training and Validation**
    * After training and experimenting different algorithms using ensemble models have good accuracy score than linear and nonlinear models.
    * Gradient Boosting Classifier ( 93 % accuracy score )
 * **Fine Tuning**
    * Using {'learning_rate': 0.1, 'max_depth': 9, 'n_estimators': 1000, 'subsample': 0.7} for Gradient Boosting Classifier improved the accuracy by 1 %.
 * **Performance Results**
    * Validation Score: 97%
    * ROC_AUC Score: 96.9 %