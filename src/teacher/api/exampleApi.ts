// The actual Domain types live in common/types/domain
export interface IExampleDomainType {
  message: string;
  count: number;
}

export const exampleApiCall = async (): Promise<IExampleDomainType> => {
  return {
    count: 42,
    message: 'I am example api responce',
  }
};
