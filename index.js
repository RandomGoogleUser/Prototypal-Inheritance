function HospitalEmployee(name) {
  this._name = name
  this._remainingVacationDays = 20
}

HospitalEmployee.prototype = {
  get name() {
    return this._name
  },
  get remainingVacationDays() {
    return this._remainingVacationDays
  }
}

HospitalEmployee.prototype.takeVacationDays = function(daysOff) {
  this._remainingVacationDays -= daysOff
}

function Nurse(name, certifications) {
  HospitalEmployee.call(this, name)
  this._certifications = certifications
}

Nurse.prototype = Object.create(HospitalEmployee.prototype)
Object.defineProperty(Nurse.prototype, "certifications", {
  get: function() {
    return this._certifications
  }
})
Nurse.prototype.addCertification = function(newCertification) {
  this._certifications.push(newCertification)
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"])

nurseOlynyk.takeVacationDays(15)
nurseOlynyk.addCertification("Genetics")

console.log(nurseOlynyk.name)
console.log(nurseOlynyk.certifications)
console.log(nurseOlynyk.remainingVacationDays)