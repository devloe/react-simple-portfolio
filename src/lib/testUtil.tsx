export function jestMock(mockedPath:string) {
    jest.mock(mockedPath, () => {
        return {
          __esModule: true,
          default: () => { // if you exporting component as default
            return <div/>;
          },
          ChildWillBeIsolated: () => { // if you exporting component as not default
            return <div/>;
          },
        };
      });
}