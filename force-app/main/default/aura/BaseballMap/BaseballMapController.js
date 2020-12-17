({
    onBaseballsLoaded: function( component, event, helper ) {
        var mapMarkers = [];
        var baseball = event.getParam( 'Baseball' );
        for ( var i = 0; i < baseball.length; i++ ) {
            var baseball = baseball[i];
            var marker = {
                'location': {
                    'Street': Major_Sports_Venues__c.ADDRESS__c,
                    'City': Major_Sports_Venues__c.CITY__c,
                    'State': Major_Sports_Venues__c.STATE__c
                },
                'title': Major_Sports_Venues__c.NAME__c,
                'description': (
                    'City: ' + Major_Sports_Venues__c.CITY__c,
                    
                    'Type: ' + Major_Sports_Venues__c.NAICS.DESC__c
                   
                   
                ),
                'icon': 'standard:location'
            };
            mapMarkers.push( marker );
        }
        component.set( 'v.mapMarkers', mapMarkers );
    }
})