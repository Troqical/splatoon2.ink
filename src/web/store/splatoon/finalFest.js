import finalFest from '@/common/data/finalFest.json';
import shiftyStations from '@/common/data/shiftyStations.json';

export const namespaced = true;

const allStages = {};

for (const shiftyStation of shiftyStations) {
  const id = shiftyStation.id;
  const image = require(`@/web/assets/img/shiftystations/${shiftyStation.image}`);
  const name = shiftyStation.names.en;

  allStages[id] = { id, image, name };
}

const schedules = [];

for (const schedule of finalFest) {
  const stages = schedule.stages.map(id => allStages[id]);
  schedules.push({
    ...schedule,
    stages,
  });
}

export const state = {
  schedules,
}

export const getters = {
  schedules(state) {
    return state.schedules;
  },
}
