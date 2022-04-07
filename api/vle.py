"""Vapor liquid equilibrium (VLE) calculations"""
from functools import partial

import numpy as np


def main():
    start = 0
    stop = 1

    x1 = np.linspace(start, stop, num=get_n_points())
    x2 = 1 - x1

    p_tot_liq = calc_liquid_total_pressure(x1)
    print(p_tot_liq)

    p_tot_vap = calc_vapor_total_pressure(x1)
    print(p_tot_vap)


def get_n_points() -> int:
    return 100


def calc_liquid_total_pressure(x1: np.ndarray) -> np.ndarray:
    x2 = 1 - x1
    K1 = calc_equilibrium_constant_1()
    K2 = calc_equilibrium_constant_2()
    return x1 * K1 + x2 * K2


def calc_vapor_total_pressure(y1: np.ndarray) -> np.ndarray:
    y2 = 1 - y1
    K1 = calc_equilibrium_constant_1()
    K2 = calc_equilibrium_constant_2()
    return 1 / (y1/K1 + y2/K2)


def calc_equilibrium_constant_1() -> float:
    # 259.16 < T < 507.60 Ambrose, Sprake, et al., 1974
    A = 4.42448
    B = 1312.253
    C = -32.445
    calc_pressure = partial(calc_pressure_antoine, A=A, B=B, C=C)
    T = get_temperature()
    p_s = calc_pressure(T)
    return p_s


def calc_equilibrium_constant_2() -> float:
    # 255.9 < T < 373 Skull 1947
    A = 4.6543
    B = 1435.264
    C = -64.848
    calc_pressure = partial(calc_pressure_antoine, A=A, B=B, C=C)
    T = get_temperature()
    p_s = calc_pressure(T)
    return p_s


def get_temperature():
    return 273.15 + 25


def calc_pressure_antoine(T: float, A: float, B: float, C: float) -> float:
    return 10 ** (A - (B / (T + C)))


if __name__ == '__main__':
    main()
