# Decision record


## Error types
### Decision

By default, all exception types are defined as `Error()` instead of creating specialized error types.

### Consequences
For tests expecting an exception to be thrown, the error type caught is `Error()`. 

A better usage of specific error types could have made tests more reliable (passing only when the expected error type thrown)

---

### Title
#### Status
What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?

#### Context
What is the issue that we're seeing that is motivating this decision or change?

#### Decision
What is the change that we're proposing and/or doing?

#### Consequences
What becomes easier or more difficult to do because of this change?


[template](https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/templates/decision-record-template-by-michael-nygard/index.md)