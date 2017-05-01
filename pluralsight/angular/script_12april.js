/*THIS IS JAVASCRIPT  PATTERN */

var work = function () {
    console.log('working wo hard');

};

var doWork = function (f) {

    console.log('here');
    try {
        f();
    }
    catch (ex) {
        console.log(ex)
    }

};

//doWork(work);
///////

/*THIS IS JAVASCRIPT MODULE PATTERN */

var creatework = function () {

    var job1 = function () {
        console.log('task1 : job1');

    }
    var task2 = function () {
        console.log('job2 : task2');

    }
    /*object return*/
    return {
        task1: job1,
        job2: task2
    }

};
/*var job creatework() same as var name*/
var job = creatework();
job.task1(); //reffers task1 from return
job.job2(); //reffers job2 from return


/*Immedaitely invoked function expression IIFE (itself)*/
(function () {


    var creatework = function () {

        var job1 = function () {
            console.log('task1 : job1');

        }
        var task2 = function () {
            console.log('job2 : task2');

        }
        /*object return*/
        return {
            task1: job1,
            job2: task2
        }

    };
    /*var job creatework() same as var name*/
    var job = creatework();
    job.task1(); //reffers task1 from return
    job.job2(); //reffers job2 from return

}());


