from pathlib import Path
from abc import ABC, abstractmethod
from argparse import ArgumentParser

import numpy as np
import matplotlib.pyplot as plt

if __name__ == "__main__":
    from index import PositionIndex
    from random_walks import Levy, Brownian
    from random_walks import RandomWalk
else:
    from src.index import PositionIndex
    from src.random_walks import Levy, Brownian
    from src.random_walks import RandomWalk


class Simulation(ABC):

    SUSCEPTIBLE = 0
    INFECTED    = 1
    RECOVERED   = 2


    def __init__(self, N: int=None, M: int=None, max_random_step: int=10, brownian: bool=False,
                max_iter: int=10000, logging: bool=False, csv_line: str=None):
        self.N = N
        self.M = M

        self.max_random_step = max_random_step

        random_walk = Brownian if brownian else Levy
        self.random_walk = random_walk(max_random_step)

        if csv_line is None:
            self.max_iter = max_iter
            self.logging  = logging

            self.ts_sick   = np.zeros(max_iter, dtype=int)
            self.ts_dead   = np.zeros(max_iter, dtype=int)
            self.last_iter = 0
        else:
            str_sick, str_dead = csv_line[:-1].split(";")
            self.ts_sick = np.array([int(value) for value in str_sick.split(",")])
            self.ts_dead = np.array([int(value) for value in str_dead.split(",")])

            len_sick, len_dead = len(self.ts_sick), len(self.ts_dead)
            if len_sick != len_dead:
                raise ValueError("ts_sick and ts_dead are not of equal length")
            self.last_iter = len_sick - 1


    @abstractmethod
    def handle_two_infected_meet(self) -> tuple:
        pass


    def run(self, seed: int):
        if seed is not None:
            np.random.seed(seed)

        if self.N <= 0 or self.M <= 1:
            return self

        x, y   = np.zeros(self.M, dtype=int), np.zeros(self.M, dtype=int)
        infect = np.zeros(self.M, dtype=int)

        position_index = PositionIndex(grid_x=self.N, grid_y=self.N)
        infected_index = set()
        new_infected   = set()
        new_recovered  = set()

        for j in range(self.M):
            x[j] = np.random.randint(0, self.N)
            y[j] = np.random.randint(0, self.N)
            position_index.append_index((x[j], y[j]), j)

        jj = np.random.randint(0, self.M-1)
        infect[jj] = 1
        n_heal, n_sick, n_dead, iteration = self.M - 1, 1, 0, 0
        infected_index.add(jj)

        while (n_sick != 0) and (iteration < self.max_iter):

            for j in infected_index:

                # move
                position_index.remove_index((x[j], y[j]), j)
                new_x = (x[j] + self.random_walk.random_step()) % self.N
                new_y = (y[j] + self.random_walk.random_step()) % self.N
                x[j] = new_x
                y[j] = new_y
                position_index.append_index((new_x, new_y), j)

                # save which walkers changed status
                same_position = position_index[(x[j], y[j])]
                for k in same_position:
                    # if an infected person meets a susceptible person, infect them
                    if infect[k] == self.SUSCEPTIBLE and j != k:
                        new_infected.add(k)
                    # if an infected person meets a recovered person, they both become recovered
                    elif infect[k] == self.RECOVERED and j != k:
                        new_recovered.add(j)
                    # if two infected people meet both/one of them become recovered (depends on model)
                    elif infect[k] == self.INFECTED and j != k:
                        status1, status2 = self.handle_two_infected_meet()

                        if status1 == self.RECOVERED:
                            new_recovered.add(j)
                        if status2 == self.RECOVERED:
                            new_recovered.add(k)

