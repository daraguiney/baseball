({
    onBaseballsLoaded: function( component, event, helper ) {
        var cols = [
            {
                'label': 'Name',
                'fieldName': 'NAME__c',
                'type': 'text'
            },
            {
                'label': 'Address',
                'fieldName': 'ADDRESS__c',
                'type': 'text'
            },
            {
                'label': 'City',
                'fieldName': 'CITY__c',
                'type': 'text'
            },
            {
                'label': 'State',
                'fieldName': 'STATE__c',
                'type': 'text'
            },
            {
                'label': 'Description',
                'fieldName': 'NAICS_DESC__c',
                'type': 'text'
            },
             {
                'label': 'Color',
                'fieldName': 'COLOR__c',
                'type': 'text'
            },
            
            {
                'label': 'Action',
                'type': 'button',
                'typeAttributes': {
                    'label': 'View details',
                    'name': 'view_details'
                }
            }
        ];
        component.set( 'v.cols', cols );
        component.set( 'v.rows', event.getParam( 'baseball' ) );
    },
    onRowAction: function( component, event, helper ) {
        var action = event.getParam( 'action' );
        var row = event.getParam( 'row' );
        if ( action.name == 'view_details' ) {
            var navigation = component.find( 'navigation' );
            navigation.navigate({
                'type': 'standard__recordPage',
                'attributes': {
                    'objectApiName': 'Major_Sport_Venues__c',
                    'recordId': row.Id,
                    'actionName': 'view'
                }
            });
            
        }
    }
    
})