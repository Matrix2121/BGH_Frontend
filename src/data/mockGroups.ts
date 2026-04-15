export interface Group {
  id: string;
  name: string;
  uri: string;
}

export const mockGroups: Group[] = Array.from({ length: 12 }, (_, i) => ({
  id: `grp-${i + 1}`,
  name: `Guild ${i + 1}`,
  uri: `https://picsum.photos/seed/gr${i}/200/200`,
}));