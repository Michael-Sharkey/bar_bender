# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: 'guest@test.com', password: "123456", username: "Peter Powerlifter", location: "Philadelphia", age: "30")
User.create(email: 'abc@123.com', password: "123456", username: "Bobby Bodybuilder", location: "California", age: "20")

Movement.create(pattern: "Push")
Movement.create(pattern: "Pull")
Movement.create(pattern: "Squat")
Movement.create(pattern: "Hinge")
Movement.create(pattern: "Core")

Exercise.create(movement_id: 1, name: "Bench Press")
Exercise.create(movement_id: 1, name: "Overhead Press")
Exercise.create(movement_id: 2, name: "Barbell Row")
Exercise.create(movement_id: 2, name: "Chin Up")
Exercise.create(movement_id: 3, name: "Back Squat")
Exercise.create(movement_id: 3, name: "Front Squat")
Exercise.create(movement_id: 4, name: "Deadlift")
Exercise.create(movement_id: 4, name: "Power Clean")
Exercise.create(movement_id: 5, name: "Ab Wheel Rollout")
Exercise.create(movement_id: 5, name: "Paloff Press")
Exercise.create(movement_id: 2, name: "Barbell Curl")

Workout.create(user_id: 1, date: '01/02/2018')
Workout.create(user_id: 1, date: '04/02/2018')
Workout.create(user_id: 1, date: '07/02/2018')
Workout.create(user_id: 1, date: '010/02/2018')
Workout.create(user_id: 1, date: '013/02/2018')
Workout.create(user_id: 1, date: '016/02/2018')

Workout.create(user_id: 2, date: '02/02/2018')
Workout.create(user_id: 2, date: '04/02/2018')
Workout.create(user_id: 2, date: '06/02/2018')
Workout.create(user_id: 2, date: '08/02/2018')
Workout.create(user_id: 2, date: '10/02/2018')
Workout.create(user_id: 2, date: '08/02/2018')

3.times { Workset.create(workout_id: 1, movement_id: "1", exercise_id: 2, weight: 95, reps: 8, rpe: 8, daily_max: false) }
Workset.create(workout_id: 1, movement_id: "1", exercise_id: 2, weight: 135, reps: 7, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 1, movement_id: "2", exercise_id: 4, weight: 0, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 1, movement_id: "2", exercise_id: 4, weight: 0, reps: 7, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 1, movement_id: "5", exercise_id: 10, weight: 50, reps: 7, rpe: 8, daily_max: false) }
3.times { Workset.create(workout_id: 3, movement_id: "3", exercise_id: 5, weight: 275, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 3, movement_id: "3", exercise_id: 5, weight: 315, reps: 8, rpe: 10, daily_max: true)

3.times { Workset.create(workout_id: 2, movement_id: "1", exercise_id: 1, weight: 185, reps: 8, rpe: 8, daily_max: false) }
Workset.create(workout_id: 2, movement_id: "1", exercise_id: 1, weight: 225, reps: 6, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 2, movement_id: "2", exercise_id: 3, weight: 185, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 2, movement_id: "2", exercise_id: 3, weight: 205, reps: 6, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 2, movement_id: "5", exercise_id: 9, weight: 0, reps: 7, rpe: 8, daily_max: false) }
3.times { Workset.create(workout_id: 2, movement_id: "4", exercise_id: 7, weight: 365, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 2, movement_id: "3", exercise_id: 7, weight: 405, reps: 3, rpe: 10, daily_max: true)

3.times { Workset.create(workout_id: 3, movement_id: "1", exercise_id: 2, weight: 115, reps: 6, rpe: 8, daily_max: false) }
Workset.create(workout_id: 3, movement_id: "1", exercise_id: 2, weight: 140, reps: 6, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 3, movement_id: "2", exercise_id: 4, weight: 0, reps: 6, rpe: 8, daily_max: false) }
Workset.create(workout_id: 3, movement_id: "2", exercise_id: 4, weight: 0, reps: 9, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 3, movement_id: "5", exercise_id: 10, weight: 50, reps: 7, rpe: 8, daily_max: false) }
3.times { Workset.create(workout_id: 3, movement_id: "3", exercise_id: 5, weight: 295, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 3, movement_id: "3", exercise_id: 5, weight: 315, reps: 5, rpe: 10, daily_max: true)

3.times { Workset.create(workout_id: 4, movement_id: "1", exercise_id: 1, weight: 190, reps: 8, rpe: 8, daily_max: false) }
Workset.create(workout_id: 4, movement_id: "1", exercise_id: 1, weight: 235, reps: 8, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 4, movement_id: "2", exercise_id: 3, weight: 190, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 4, movement_id: "2", exercise_id: 3, weight: 215, reps: 3, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 4, movement_id: "5", exercise_id: 9, weight: 0, reps: 10, rpe: 8, daily_max: false) }
3.times { Workset.create(workout_id: 4, movement_id: "4", exercise_id: 7, weight: 380, reps: 5, rpe: 9, daily_max: false) }
Workset.create(workout_id: 4, movement_id: "3", exercise_id: 7, weight: 410, reps: 1, rpe: 10, daily_max: true)

3.times { Workset.create(workout_id: 5, movement_id: "1", exercise_id: 2, weight: 105, reps: 8, rpe: 8, daily_max: false) }
Workset.create(workout_id: 5, movement_id: "1", exercise_id: 2, weight: 150, reps: 5, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 5, movement_id: "2", exercise_id: 4, weight: 0, reps: 6, rpe: 8, daily_max: false) }
Workset.create(workout_id: 5, movement_id: "2", exercise_id: 4, weight: 0, reps: 11, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 5, movement_id: "5", exercise_id: 10, weight: 50, reps: 12, rpe: 8, daily_max: false) }
3.times { Workset.create(workout_id: 5, movement_id: "3", exercise_id: 5, weight: 285, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 5, movement_id: "3", exercise_id: 5, weight: 290, reps: 8, rpe: 10, daily_max: true)

3.times { Workset.create(workout_id: 6, movement_id: "1", exercise_id: 1, weight: 205, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 6, movement_id: "1", exercise_id: 1, weight: 215, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 6, movement_id: "2", exercise_id: 3, weight: 205, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 6, movement_id: "2", exercise_id: 3, weight: 225, reps: 6, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 6, movement_id: "5", exercise_id: 9, weight: 0, reps: 7, rpe: 8, daily_max: false) }
3.times { Workset.create(workout_id: 6, movement_id: "4", exercise_id: 7, weight: 365, reps: 5, rpe: 8, daily_max: false) }
Workset.create(workout_id: 6, movement_id: "3", exercise_id: 7, weight: 415, reps: 3, rpe: 10, daily_max: true)

3.times { Workset.create(workout_id: 7, movement_id: "1", exercise_id: 1, weight: 135, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 7, movement_id: "1", exercise_id: 1, weight: 185, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 7, movement_id: "1", exercise_id: 1, weight: 95, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 7, movement_id: "1", exercise_id: 1, weight: 134, reps: 1, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 7, movement_id: "1", exercise_id: 1, weight: 50, reps: 10, rpe: 8, daily_max: false) }
Workset.create(workout_id: 7, movement_id: "1", exercise_id: 1, weight: 55, reps: 8, rpe: 8, daily_max: true)

3.times { Workset.create(workout_id: 8, movement_id: "2", exercise_id: 11, weight: 50, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 8, movement_id: "2", exercise_id: 11, weight: 60, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 8, movement_id: "2", exercise_id: 11, weight: 40, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 8, movement_id: "2", exercise_id: 11, weight: 40, reps: 1, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 8, movement_id: "2", exercise_id: 11, weight: 30, reps: 10, rpe: 8, daily_max: false) }
Workset.create(workout_id: 8, movement_id: "2", exercise_id: 11, weight: 20, reps: 8, rpe: 8, daily_max: true)

3.times { Workset.create(workout_id: 9, movement_id: "1", exercise_id: 1, weight: 135, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 9, movement_id: "1", exercise_id: 1, weight: 185, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 9, movement_id: "1", exercise_id: 1, weight: 95, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 9, movement_id: "1", exercise_id: 1, weight: 134, reps: 1, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 9, movement_id: "1", exercise_id: 1, weight: 50, reps: 10, rpe: 8, daily_max: false) }
Workset.create(workout_id: 9, movement_id: "1", exercise_id: 1, weight: 55, reps: 8, rpe: 8, daily_max: true)

3.times { Workset.create(workout_id: 10, movement_id: "2", exercise_id: 11, weight: 50, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 10, movement_id: "2", exercise_id: 11, weight: 60, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 10, movement_id: "2", exercise_id: 11, weight: 40, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 10, movement_id: "2", exercise_id: 11, weight: 40, reps: 1, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 10, movement_id: "2", exercise_id: 11, weight: 30, reps: 10, rpe: 8, daily_max: false) }
Workset.create(workout_id: 10, movement_id: "2", exercise_id: 11, weight: 20, reps: 8, rpe: 8, daily_max: true)

3.times { Workset.create(workout_id: 11, movement_id: "1", exercise_id: 1, weight: 135, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 11, movement_id: "1", exercise_id: 1, weight: 185, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 11, movement_id: "1", exercise_id: 1, weight: 95, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 11, movement_id: "1", exercise_id: 1, weight: 134, reps: 1, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 11, movement_id: "1", exercise_id: 1, weight: 50, reps: 10, rpe: 8, daily_max: false) }
Workset.create(workout_id: 11, movement_id: "1", exercise_id: 1, weight: 55, reps: 8, rpe: 8, daily_max: true)

3.times { Workset.create(workout_id: 12, movement_id: "2", exercise_id: 11, weight: 50, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 12, movement_id: "2", exercise_id: 11, weight: 60, reps: 3, rpe: 10, daily_max: true)
3.times { Workset.create(workout_id: 12, movement_id: "2", exercise_id: 11, weight: 40, reps: 12, rpe: 8, daily_max: false) }
Workset.create(workout_id: 12, movement_id: "2", exercise_id: 11, weight: 40, reps: 1, rpe: 9, daily_max: true)
3.times { Workset.create(workout_id: 12, movement_id: "2", exercise_id: 11, weight: 30, reps: 10, rpe: 8, daily_max: false) }
Workset.create(workout_id: 12, movement_id: "2", exercise_id: 11, weight: 20, reps: 8, rpe: 8, daily_max: true)


10.times {Journal.create(user_id: 1, title: 'Test Post User 1', entry: "<div><strong>This is a dummy post for seed data purposes.<br></strong><em>This is a dummy post for seed data purposes.<br></em><del>This is a dummy post for seed data purposes.</del></div><ul><li>This is a dummy post for seed data purposes.</li></ul><blockquote>This is a dummy post for seed data purposes.</blockquote><ol><li>This is a dummy post for seed data purposes.</li></ol>") }
10.times {Journal.create(user_id: 2, title: 'Test Post User 2', entry: "<div><strong>This is a dummy post for seed data purposes.<br></strong><em>This is a dummy post for seed data purposes.<br></em><del>This is a dummy post for seed data purposes.</del></div><ul><li>This is a dummy post for seed data purposes.</li></ul><blockquote>This is a dummy post for seed data purposes.</blockquote><ol><li>This is a dummy post for seed data purposes.</li></ol>") }
