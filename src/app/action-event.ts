enum ActionEventType {
    MOVE = 0,
    MUTATE_PLAYER = 1,
}

class ActionEvent {
    public type: ActionEventType
    public name: string
    public raw: any

    constructor(eventJson: any) {
        this.type = eventJson.type
        this.raw = eventJson
        switch(eventJson.type) {
            case ActionEventType.MOVE:
                this.name = "Move character";
                break;
            case ActionEventType.MUTATE_PLAYER:
                this.name = "Mutate character";
                break;
            default:
                this.name = "Unknown event"
                break;
        }
    }
}

class MoveActionEvent extends ActionEvent {
}

class MutateCharacterActionEvent extends ActionEvent {
}

export { ActionEvent, MoveActionEvent, MutateCharacterActionEvent, ActionEventType }
