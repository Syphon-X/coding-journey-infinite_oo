
# Clock In/Out Counter


#TODO create a clock in and out clock for work
#TODO Step 1: create an input for clock in, lunch out/lunch in

#TODO Step 2: Taking the inputs from step 1 to create a function that calculate a time in which the user should clock out from work.

#TODO Step 3: Display that clock out timer to the user

#TODO Step 4: Create any limiters

#TODO Step 5: Bonus: Create this as an app that could be used

from datetime import datetime, timedelta


total_hours = 8 * 60 # converts to mins within required shift

today = datetime.today().strftime('%Y-%m-%d')
grace_period = ['8:55am', '8:56am', '8:57am', '8:58am', '8:59am', '9:01am', '9:02am', '9:03am', '9:04am', '9:05am']
# Converts 8:55 am - 9:05 am to 9:00 am

# User defined inputs
begin_day = input('Work Start Time in HH:MM AM/PM: ').lower().replace(" ", "")
if begin_day in grace_period:
    begin_day = '9:00am'
start = today + " " + begin_day
lunch_out = today + " " + input('Clock out for Lunch in HH:MM AM/PM: ').replace(" ", "")
lunch_in = today + " " + input('Clock in after Lunch in HH:MM AM/PM: ').replace(" ", "")
# the replace method helps standardize user inputs for HH:MM AM/PM and HH:MMAM/PM

start_time = datetime.strptime(start, "%Y-%m-%d %I:%M%p")
lunchout_time = datetime.strptime(lunch_out, "%Y-%m-%d %I:%M%p")
lunchin_time = datetime.strptime(lunch_in, "%Y-%m-%d %I:%M%p")

# This creates a clock in/out at off times to equal 8 hrs total
duration_first_half = int((lunchout_time - start_time).total_seconds() // 60)
duration_second_half = (total_hours - duration_first_half)

end_time = (lunchin_time + timedelta(minutes=duration_second_half)).strftime('%I:%M %p')

print(f'-----------------------------------')
print(f'End of Day Clock-Out Time: {today}, {end_time}')

