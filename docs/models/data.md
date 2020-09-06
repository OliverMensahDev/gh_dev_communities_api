# API for Dev Communities in Ghana

## Models

1. Communities: Organization-Led or Independent
2. Events: Bootcamp, meetup, conference, workshop
3. Users: Community Admin, Community Leaders, User(Developer), User(Designer), etc

### Communities

- \_id
- user
- name
- leaders
- social_media_handles
- category
- description
- online_forum
- link_to_forum

### User

- \_id
- name
- email
- role
- password

### Events

- \_id
- user
- community
- title
- description
- category
- venue
- registration_link
- isPaid
