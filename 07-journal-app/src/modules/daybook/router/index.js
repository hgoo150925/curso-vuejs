export default {
  name: 'daybook',
  component: () => import('../../daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('../../daybook/views/NoEntrySelected.vue'),
    },
  ],
};
