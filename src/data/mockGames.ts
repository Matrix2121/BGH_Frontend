export interface Game {
  id: string;
  uri: string;
}

export const mockGames: Game[] = Array.from({ length: 20 }, (_, i) => ({
  id: `game-${i + 1}`,
  uri: `https://picsum.photos/seed/gm${i}/300/300`,
}));