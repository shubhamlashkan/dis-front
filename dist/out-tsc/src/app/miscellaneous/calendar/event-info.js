var EventInfo = /** @class */ (function () {
    function EventInfo(title, startDate, endDate, description, participants, eventIncharge, createdBy, createdDate) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.eventIncharge = eventIncharge;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.participants = [];
        for (var i = 0; i < participants.length; i++) {
            this.participants.push({ participantId: participants[i] });
        }
    }
    return EventInfo;
}());
export { EventInfo };
//# sourceMappingURL=event-info.js.map