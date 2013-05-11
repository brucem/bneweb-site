$(document).ready(function() {
    // Original URL 'http://www.meetup.com/The-Brisbane-Web-Design-Meetup-Group/events/ical/The+Brisbane+Web+Design+Meetup+Group/'
    // Need to store this locally to aviod Origin issues
    var calUrl = 'http://pipes.yahoo.com/pipes/pipe.run?_id=38c4ea35827efd50fd73e9801df5c843&_render=json';

    $.ajax({
        url: calUrl,
        dataType: 'json'
    }).done(function( data ) {
        displayNextEvent( data.value.items );
        displayUpcomingEvents( data.value.items );
    });

    function createEvent( vevent )
    {
        var eventDate = vevent['y:dtstart'];
        return {
            day:         eventDate.day,
            month:       getMonthShortName(eventDate.month),
            year:        eventDate.year,
            name:        vevent.summary,
            url:         vevent.url,
            description: vevent.description,
            location:    vevent.location,
        }
    }

    function displayNextEvent( cal ){
        var template = document.getElementById('template-next-event').innerHTML;
        var output = Mustache.render(template, createEvent(cal[0]));
        $('.next-event').html(output);
    }

    function displayUpcomingEvents( cal ){
        var upcomingEventsCnt = cal.length;
        var template = document.getElementById('template-event').innerHTML;
        var output = '';
        for (var i = 1; i < upcomingEventsCnt; i++) {
            output = output + Mustache.render(template, createEvent(cal[i]));
        }
        $('.upcoming-events').html(output);
    }

    function getMonthShortName( month )
    {
        var monthShortNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        return monthShortNames[ month - 1 ];
    }
});
