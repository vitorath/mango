/* Open Closed Principle e Dependency Inversion */
// Diferença Class (tipo) da instancia
// Decorator
// Composite
// Proxy

// Layer 1
class AddGroupController {
  constructor(
    private validation: Validation,
  ) {}

  add() {

  }
}

interface Validation {
  validate: () => void;
}

// Layer 2
class RequiredFieldValidation implements Validation {
  validate(): void {}
}

class PhoneValidation implements Validation {
  validate(): void {}
}

//
class AddGroupValidationComposite implements Validation {
  constructor(
    private requiredFieldValidation: RequiredFieldValidation,
    private phoneValidation: PhoneValidation,
  ) {}

  validate(): void {
    this.requiredFieldValidation.validate();
    this.phoneValidation.validate()
  }
}


// Composition Root - Main
/* Dependency Injection */
const requiredFieldValidation = new RequiredFieldValidation();
const phoneValidation = new PhoneValidation();
const composite = new AddGroupValidationComposite(requiredFieldValidation, phoneValidation);
const controller = new AddGroupController(composite);