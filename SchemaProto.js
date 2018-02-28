import mongoose from 'mongoose'

var Schema = mongoose.Schemal;

const proto = new Schema({
    firstname: String,
    lastname: String,
    description: String,
    birthday: Date,
    driverLicense: String,
    contact: {
        adresse: {
            label: String,
            postal: String,
            city: String,
            country: String
        },      
        telephone: String,
        portable: String,
        mail: String
    },
    skills: [{
        label: String,
        mark: Number
    }],
    experience: [{
        label: String,
        description: String,
        company: String,
        country: String,
        city: String,
        startDate: Date,
        endDate: Date
    }],
    formation: [{
        label: String,
        description: String,
        school: String,
        country: String,
        city: String,
        startDate: Date,
        endDate: Date
    }],
    langages: [{
        label: String,
        description: String
    }]

})