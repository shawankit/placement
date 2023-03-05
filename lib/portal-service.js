var InstituteService = {
    getInstitutes: function(successCallback, failureCallback) {
        HttpService.getRequest('/institutes', function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    createInstitute: function(institute, successCallback, failureCallback) {
        HttpService.postRequest('/institutes', institute, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    updateInstitute: function(institute, successCallback, failureCallback) {
        HttpService.putRequest('/institutes/' + institute.id, institute, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    deleteInstitute: function(instituteId, successCallback, failureCallback) {
        HttpService.deleteRequest('/institutes/' + instituteId, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    getInstituteById: function(instituteId, successCallback, failureCallback) {
        HttpService.getRequest('/institutes/' + instituteId, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    getDepartmentsByInstitute: function(instituteId, successCallback, failureCallback) {
        HttpService.getRequest('/institutes/' + instituteId + '/departments', function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    getStudentsByInstitute: function(instituteId, successCallback, failureCallback) {
        HttpService.getRequest(`/institutes/${instituteId}/students` , function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
}

var DepartmentService = {
    getDepartments: function(successCallback, failureCallback) {
        HttpService.getRequest('/departments', function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    createDepartment: function(department, successCallback, failureCallback) {
        HttpService.postRequest('/departments', department, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    updateDepartment: function(department, successCallback, failureCallback) {
        HttpService.putRequest('/departments/' + department.id, department, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    deleteDepartment: function(department, successCallback, failureCallback) {
        HttpService.deleteRequest('/departments/' + department.id, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    getStudentsByDepartment: function(departmentId, successCallback, failureCallback) {
        HttpService.getRequest(`/departments/${departmentId}/students`, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
}

var StudentService = {
    createStudent: function(student, successCallback, failureCallback) {
        HttpService.postRequest('/students', student, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    updateStudent: function(student, successCallback, failureCallback) {
        HttpService.putRequest('/students/' + student.id, student, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    deleteStudent: function(student, successCallback, failureCallback) {
        HttpService.deleteRequest('/students/' + student.id, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    getStudentById: function(studentId, successCallback, failureCallback) {
        HttpService.getRequest('/students/' + studentId, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
}

var PlacemetInfo = {
    createPlacementInfo: function(placementInfo, successCallback, failureCallback) {
        HttpService.postRequest('/placementInfo', placementInfo, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    updatePlacementInfo: function(placementInfo, successCallback, failureCallback) {
        HttpService.putRequest('/placementInfo/' + placementInfo.id, placementInfo, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    deletePlacementInfo: function(placementInfo, successCallback, failureCallback) {
        HttpService.deleteRequest('/placementInfo/' + placementInfo.id, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    },
    getPlacementInfoById: function(placementInfoId, successCallback, failureCallback) {
        HttpService.getRequest('/placementInfo/' + placementInfoId, function(response) {
            successCallback(response);
        }, function(response) {
            failureCallback(response);
        });
    }
}

//institute
// {
//     "instName": "Example Institute",
//     "instAddress": "123 Main St.",
//     "instPh": "555-1234",
//     "custody": "Example Custody",
//     "instType": "PUBLIC",
//     "instCode": "12345",
//     "instHead": "Example Head",
//     "designation": "Example Designation",
//     "email": "example@example.com",
//     "password": "examplepassword",
//     "hostelAvailability": 1.0,
//     "hostelBoys": 10.0,
//     "hostelGirls": 5.0,
//     "pin": "12345",
//     "district": "Example District",
//     "undertaking": "Example Undertaking",
//     "othersContact": "555-5678",
//     "regNo": "67890",
//     "hostelAvailableBoys": 2.0,
//     "hostelAvailableGirls": "Yes",
//     "shortType": "Example Short Type",
//     "jexpo": "Example Jexpo",
//     "pharmacy": "Example Pharmacy",
//     "nadView": "Example Nad View",
//     "actualType": "Example Actual Type",
//     "instNameLower": "example institute",
//     "registrationVisibility": "Yes",
//     "govsportdirect": "Example Govsportdirect"
//   }

//Student Json
/*{
  "id": "student123",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "registrationNumber": "123456",
  "roll": "101",
  "number": "555-1234",
  "institute": {
    "id": "inst123",
  },
  "department": {
    "id": "dept123",
  },
  "completionOfSixthSemester": true,
  "totalMarks": 900,
  "cgp": 8.5,
  "semesterSixPercentage": 85.0,
  "ogpa": 8.4,
  "overallPercentage": 80.0,
  "classPass": "First Class",
  "monthS6": "May",
  "yearS6": "2022",
  "sessionS6": "2020-2022",
}
*/

//PlacementInfo JSON
        /* 
        "placementType": placementType;
        "companyName": companyName;
        "companyType": companyType;
        "averageSalary": averageSalary;
        "businessName": businessName;
        "typeOfBusiness": typeOfBusiness;
        "turnover": turnover;
        "reasonForUnemployment": reasonForUnemployment;
        "institute": institute;
        "department": department;
        "course": course;
        "student": {
            id: ""
        }
    }*/
