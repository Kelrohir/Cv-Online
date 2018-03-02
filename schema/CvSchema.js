var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const CvSchema = new Schema({
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
});

var CV = mongoose.model('curriculumvitaes', CvSchema);
module.exports = CV;