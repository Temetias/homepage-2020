type Container = {
  // Container interface
}

type Cart = Container & {
  // "Cart" is a container and something "Cart" specific
};

type Shelf = Container & {
  // "Shelf" is a container and something "Shelf" specific
};

type Item = {
  // Item interface
}

// The isIn implementation in TypeScript
const isIn = (where: Container) => (what: Item) => {
  // Some complex implementation.
}