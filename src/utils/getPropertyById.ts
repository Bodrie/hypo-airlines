export const getPropertyById = <T>(
  arr: T[],
  targetId: number,
  propertyKey: keyof T
): any | undefined => {
  const foundObject = arr.find((obj) => (obj as any).id === targetId);

  return foundObject ? foundObject[propertyKey] : undefined;
};
