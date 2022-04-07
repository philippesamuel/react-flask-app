import time
from flask import Flask
import numpy as np

from vle import calc_liquid_total_pressure, calc_vapor_total_pressure

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/vle/pressure')
def get_pressure_data():
    start = 0
    stop = 1
    n_points = 100
    x = np.linspace(start, stop, num=n_points)
    p_tot_liq = calc_liquid_total_pressure(x)
    p_tot_vap = calc_vapor_total_pressure(x)
    return {'x': x.tolist(),
            'liquid': p_tot_liq.tolist(),
            'vapor': p_tot_vap.tolist()}


