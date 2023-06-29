


document.getElementById('dob-input').addEventListener('keyup', (e) => {
    e.preventDefault()
    const day = document.getElementById('day-input').value
    const month = document.getElementById('month-input').value
    const year = document.getElementById('year-input').value
    const dayErr = document.getElementById('day-error')
    const monthErr = document.getElementById('month-error')
    const yearErr = document.getElementById('year-error')
    const thisYear = new Date().getFullYear()
    const submit = document.getElementById('submit')



    if (day > 31 || day > 28 && month == 02) {
        dayErr.innerHTML = 'Must be valid day'
        dayErr.classList.remove('invisible')

    } else if (month == 04 || month == 06 || month == 09 || month == 10) {
        if (day > 30) {
            console.log('im checking')
            dayErr.innerHTML = 'Must be valid day'
            dayErr.classList.remove('invisible')
        } else {

        }

    } else if (month < 0 || month > 12) {
        monthErr.innerHTML = "Must be a valid month"
        monthErr.classList.remove('invisible')
        console.log('checking month')
    } else if (year < 0 || year >= thisYear) {
        yearErr.innerHTML = "Must be a valid year"
        console.log('checking year')
    } else {
        dayErr.classList.add('invisible')
        monthErr.classList.add('invisible')
        yearErr.classList.add('invisible')

    }


    const birthdate = month + '/' + day + '/' + year
    console.log(birthdate)


    submit.addEventListener('click', (e) => {
        e.preventDefault()
        if (dayErr.classList.contains('invisible') & monthErr.classList.contains('invisible') & yearErr.classList.contains('invisible')) {
            calculateAge(birthdate)
        }

    })

    function calculateAge(birthdate) {
        e.preventDefault()
        // Get output html
        const yearOutput = document.getElementById('years-output')
        const monthOutput = document.getElementById('months-output')
        const dayOutput = document.getElementById('days-output')
        // Convert the birthdate string to a Date object
        var dob = new Date(birthdate);
        console.log(dob)
        // Get the current date
        var now = new Date();


        // Calculate the age in years
        var ageInYears = now.getFullYear() - dob.getFullYear();


        // Subtract a year if the current date is before the person's birthday this year
        if (now.getMonth() < dob.getMonth() || (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())) {
            ageInYears--;
        }

        // Calculate the number of months between the person's birthday this year and the current date
        var months = (now.getMonth() + 12 - dob.getMonth()) % 12;

        // Calculate the number of days between the person's birthday this year and the current date
        var days = now.getDate() - dob.getDate();

        // If the number of days is negative, borrow a month from the months count and add 30 days
        if (days < 0) {
            days += 30;
            months--;
        }

        // Return the age as an object with properties for years, months, and days
        const age = { years: ageInYears, months: months, days: days }

        yearOutput.innerHTML = age.years
        monthOutput.innerHTML = age.months
        dayOutput.innerHTML = age.days

    }

})




// || month == 02 && day > 28 || month == 04 || 06 || 09 || 10 && day > 30

// Maybe reuse code below

//     if (day <= 31 && month <= 12 && year > 0 && year < thisYear) {
//         if (month == 02 && day > 28) {
//             // TODO -  change for not valid error
//             console.log('too many days for february')
//             dayErr.innerHTML = 'Must be a valid date'
//         }
//     } else if (day > 32) {
//         dayErr.innerHTML = 'Must be valid day'
//         dayErr.classList.toggle('invisible')


//     } else if (month > 12) {
//         monthErr.innerHTML = 'Must be valid month'

//     } else if (year > thisYear) {
//         yearErr.innerHTML = 'Must be valid year'
//     }
// })



// function calculateAge(birthdate) {
//     e.preventDefault()
//     // Get output html
//     const yearOutput = document.getElementById('years-output')
//     const monthOutput = document.getElementById('months-output')
//     const dayOutput = document.getElementById('days-output')
//     // Convert the birthdate string to a Date object
//     var dob = new Date(birthdate);

//     // Get the current date
//     var now = new Date();

//     // Calculate the age in years
//     var ageInYears = now.getFullYear() - dob.getFullYear();


//     // Subtract a year if the current date is before the person's birthday this year
//     if (now.getMonth() < dob.getMonth() || (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())) {
//         ageInYears--;
//     }

//     // Calculate the number of months between the person's birthday this year and the current date
//     var months = (now.getMonth() + 12 - dob.getMonth()) % 12;

//     // Calculate the number of days between the person's birthday this year and the current date
//     var days = now.getDate() - dob.getDate();

//     // If the number of days is negative, borrow a month from the months count and add 30 days
//     if (days < 0) {
//         days += 30;
//         months--;
//     }

//     // Return the age as an object with properties for years, months, and days
//     const age = { years: ageInYears, months: months, days: days }

//     yearOutput.innerHTML = age.years
//     monthOutput.innerHTML = age.months
//     dayOutput.innerHTML = age.days

// }


