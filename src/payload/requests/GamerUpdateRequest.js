export class GamerUpdateRequest {
    userUpdateRequest;
    lastName;
    description;

    constructor(userUpdateRequest, lastName, description) {
        this.userUpdateRequest = userUpdateRequest;
        this.lastName = lastName;
        this.description = description;
    }
}