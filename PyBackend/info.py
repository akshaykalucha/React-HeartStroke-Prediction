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


