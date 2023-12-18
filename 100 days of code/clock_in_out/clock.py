
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
start = today + " " + input('Work Start Time in HH:MM AM/PM: ')
lunch_out = today + " " + input('Clock out for Lunch in HH:MM AM/PM: ')
lunch_in = today + " " + input('Clock in after Lunch in HH:MM AM/PM: ')

# Need to convert times between 8:55 and 9:05 to 9 am.

start_time = datetime.strptime(start, "%Y-%m-%d %I:%M %p")
lunchout_time = datetime.strptime(lunch_out, "%Y-%m-%d %I:%M %p")
lunchin_time = datetime.strptime(lunch_in, "%Y-%m-%d %I:%M %p")

#DONE Need to create a dynamic system if clock in/out at off times to equal 8 hrs total
duration_first_half = int((lunchout_time - start_time).total_seconds() // 60)
duration_second_half = (total_hours - duration_first_half)

end_time = (lunchin_time + timedelta(minutes=duration_second_half)).strftime('%I:%M %p')


print(f'End of Day Clock-Out Time: {today}, {end_time}')


