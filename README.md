##pr2 - Byron's Contact List
###add delete and create contacts.

_______

###---should appear in HTML css
###---single web page
###---The user can:
####*create a contact
####*add a contact
####*view contact list
####*remove a contact
_______
###ERD
##categories

| keys | values |
| ------ | ----------- |
| id  | INTEGER PRIMARY KEY |
| name | TEXT |

##contacts

| keys | values |
| ------ | ----------- |
| id  | INTEGER |
| category_id | FOREIGN KEY REFERENCES topics(id) |
| name| TEXT |
| city| TEXT |
| phone| TEXT |
| email| TEXT |
| image_url| TEXT|
