/**
 * 템플릿 리터럴
 */
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal1 =
  | `red-dog`
  | "red-cat"
  | "red-chicken"
  | "black-dog" /* | ... */;
type ColoredAnimal2 = `${Color}-${Animal}`;
