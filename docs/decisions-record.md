# Decision record

## Folder structure
### Decision

The folder structure has been kept as simple as possible in order not to over engineer the solution. 

In a professional application I would go for a more granular architecture

### Consequences
Depending on the changes of requirements, the folder structure could be not full fill the needs. 

## Error types
### Decision

By default, all exception types are defined as `Error()` instead of creating specialized error types.

### Consequences
For tests expecting an exception to be thrown, the error type caught is `Error()`. 

A better usage of specific error types could have made tests more reliable (passing only when the expected error type thrown)

## Linter 
### Decision
I decided not to spend too much time fine-tuning the project with formatting rules mainly by the restrictions in time.

### Consequences
The linter script does not do much. However, the project is ready to easily add more rules.

## Fixed version in `package.json`
### Decision

I decided to fix major versions in order to avoid misbehavior of libraries by omission

### Consequences
Versions must be changed in purpose. 

---

###Resources
[Decision record template](https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/templates/decision-record-template-by-michael-nygard/index.md)