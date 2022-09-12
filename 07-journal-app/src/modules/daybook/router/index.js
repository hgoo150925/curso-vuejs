export default {
  name: 'daybook',
  component: () => import('../../daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('../../daybook/views/NoEntrySelected.vue'),
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import('../../daybook/views/EntryView.vue'),
    },
  ],
};
