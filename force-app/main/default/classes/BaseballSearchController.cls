public with sharing class BaseballSearchController {
    @AuraEnabled
    public static List<Major_Sport_Venues__c> searchBaseballs ( String searchTerm ) {
        List<Major_Sport_Venues__c> baseball = new List<Major_Sport_Venues__c>();
        if ( String.isNotBlank( searchTerm ) ) 
            
        {
            List<List<SObject>> searchResults = [
                FIND :searchTerm
                RETURNING Major_Sport_Venues__c(
                    NAME__c,
                    ADDRESS__c, CITY__c,
                    STATE__c, NAICS_DESC__c, COLOR__c
                    ORDER BY NAME__c
                    LIMIT 10
                )
            ];
            
            baseball = searchResults[0];
        }
        return baseball;
    }
}