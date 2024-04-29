
# NOTES

# rain_days2 = data[(data.condition == 'Rain') & (data.day == 'Tuesday')]
# print(f' Filtered Results:\n {rain_days2}')

# rain_days = data[data['condition'] == 'Rain']
# ^ var   = find     ^ column condition == 'Rain'   similar to the code below
# rain_days = data[data.condition == 'Rain']

# Print the DataFrame containing rainy days
# print(rain_days)


# df = pd.DataFrame(test)
# df.to_csv('test.csv')

# username, agreement, category  ( intervention_type [Static/Dynamic], 
# intervention_quality [Good/Bad], 
# intervention_timing [early/medium/late], 
# priority [p0 - p6], 
# HLCs )

# category -> main -> tags 

# TODO I need to find where indiviual usernames are struggling with their clips in this mini example.
# TODO create functions and classes that will count and point out the differentiation in clip labels.
# TODO Package the results into a readible report.
# TODO what are valuable metrics to extract from these CSVs?  Of the major disagreement, count

import pandas as pd

# def username(name):
#     username = data[data.username == '\'' + {name} + '\'']
#     return username

data = pd.read_csv('consensus.csv')
disagreements = data[data['agreement'] == 'no_agreement']

class Cunfu():
    # data = pd.read_csv('consensus.csv')
    # disagreements = data[data['agreement'] == 'no_agreement']
    def __init__(self, username, disagreements):
        self.username = username.lower()
        self.disagreements = disagreements
# #test
# adam_static_disagreements = disagreements[(disagreements['username'] == 'adam') & (disagreements['category'].str.contains('static', case=False))]['link'].count()

# print(adam_static_disagreements)

    def intervention_type(self):
        static_disagreements = self.disagreements[(disagreements.username == f"{self.username}") & (disagreements['category'].str.contains('static', case=False))]['link'].count()
        
        dynamic_disagreements = self.disagreements[(disagreements.username == f"{self.username}") & (disagreements['category'].str.contains('dynamic', case=False))]['link'].count()
        
        return f'Static Disagreements: {static_disagreements}', f'Dynamic Disagreements: {dynamic_disagreements}'
    #Count disagreements where category is 'good' vs. 'bad'. 
    def intervention_quality(self):
        quality_good_disagreements = self.disagreements[(disagreements.username == f"{self.username}") & (disagreements['category'].str.contains('good', case=False))]['link'].count()
        
        quality_bad_disagreements = self.disagreements[(disagreements.username == f"{self.username}") & (disagreements['category'].str.contains('bad', case=False))]['link'].count()
        
        return f'Good Quality Disagreements: {quality_good_disagreements}', f'Bad Quality Disagreements: {quality_bad_disagreements}'

    # Counts priority level disagreements
    p0_disagreements = disagreements[disagreements['category'].str.contains('p0', case=False)]['link'].count()
    p1_disagreements = disagreements[disagreements['category'].str.contains('p1', case=False)]['link'].count()
    p2_disagreements = disagreements[disagreements['category'].str.contains('p2', case=False)]['link'].count()
    p3_disagreements = disagreements[disagreements['category'].str.contains('p3', case=False)]['link'].count()
    p4_disagreements = disagreements[disagreements['category'].str.contains('p4', case=False)]['link'].count()
    p5_disagreements = disagreements[disagreements['category'].str.contains('p5', case=False)]['link'].count()
    p6_disagreements = disagreements[disagreements['category'].str.contains('p6', case=False)]['link'].count()


# create another class to unpack the desired
adam = Cunfu('adam', disagreements)

print(adam.intervention_type())
print(adam.intervention_quality())


# def process_disagreements(data):
#     # Split the 'category' column and expand into separate rows
#     split_data = data.explode('category').copy()
#     # Create a dictionary to store username and category counts
#     username_category_counts = {}
#     for index, row in split_data.iterrows():
#         username = row['username']
#         category = row['category']
#         if username not in username_category_counts:
#             username_category_counts[username] = {}
#         if category not in username_category_counts[username]:
#             username_category_counts[username][category] = 0
#         username_category_counts[username][category] += 1

#     # Print username and their category disagreement counts
#     for username, category_counts in username_category_counts.items():
#         print(f"Username: {username}")
#         for category, count in category_counts.items():
#             print(f"\tCategory: {category}, Count: {count}")

# data = pd.read_csv('consensus.csv')
# disagreements = data[data['agreement'] == 'no_agreement']
# print(process_disagreements(disagreements))


# Create a dictionary to store username and disagreement count
username_disagreements = {}
for index, row in disagreements.iterrows():
    username = row['username']
    if username not in username_disagreements:
        username_disagreements[username] = 0
    username_disagreements[username] += 1  # Increment count for username

# Print the username and their disagreement count
for username, count in username_disagreements.items():
    print(f"Username: {username}, Disagreements: {count}")

# This prints outs culmulative scores across all clips
# Count disagreements where category has 'static' vs. doesn't
static_disagreements = disagreements[disagreements['category'].str.contains('static', case=False)]['link'].count()
dynamic_disagreements = disagreements[~disagreements['category'].str.contains('static', case=False)]['link'].count()


#Count disagreements where category is 'good' vs. 'bad'. 
quality_good_disagreements = disagreements[disagreements['category'].str.contains('good', case=False)]['link'].count()
quality_bad_disagreements = disagreements[disagreements['category'].str.contains('bad', case=False)]['link'].count()

# Counts priority level disagreements
p0_disagreements = disagreements[disagreements['category'].str.contains('p0', case=False)]['link'].count()
p1_disagreements = disagreements[disagreements['category'].str.contains('p1', case=False)]['link'].count()
p2_disagreements = disagreements[disagreements['category'].str.contains('p2', case=False)]['link'].count()
p3_disagreements = disagreements[disagreements['category'].str.contains('p3', case=False)]['link'].count()
p4_disagreements = disagreements[disagreements['category'].str.contains('p4', case=False)]['link'].count()
p5_disagreements = disagreements[disagreements['category'].str.contains('p5', case=False)]['link'].count()
p6_disagreements = disagreements[disagreements['category'].str.contains('p6', case=False)]['link'].count()

print('\n********** Static/Dynamic ************\n')
# Print the results based on the clips as the anchor
print(f"Static category disagreements: {static_disagreements}")
print(f"Dynamic category disagreements: {dynamic_disagreements}")

print('\n********** Good/Bad ************\n')

print(f"Good category disagreements: {quality_good_disagreements}")
print(f"Bad category disagreements: {quality_bad_disagreements}")

print('\n********** Priority ************\n')

print(f'Priority 0 category disagreements: {p0_disagreements}')
print(f'Priority 1 category disagreements: {p1_disagreements}')
print(f'Priority 2 category disagreements: {p2_disagreements}')
print(f'Priority 3 category disagreements: {p3_disagreements}')
print(f'Priority 4 category disagreements: {p4_disagreements}')
print(f'Priority 5 category disagreements: {p5_disagreements}')
print(f'Priority 6 category disagreements: {p6_disagreements}')



# #test
# adam_static_disagreements = disagreements[(disagreements['username'] == 'adam') & (disagreements['category'].str.contains('static', case=False))]['link'].count()

# print(adam_static_disagreements)











