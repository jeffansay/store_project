export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
  name: 'Carbon Area',
    url: '/carbon',
      icon: 'icon-puzzle',
        children: [
          {
            name: 'Accessories', //name on the dropdown
            url: '/carbon/acc', //link of the route
            icon: 'icon-puzzle'
          },
          {
            name: 'Cebu Shoe-maker', //name on the dropdown
            url: '/carbon/sli', //link of the route
            icon: 'icon-puzzle'
          },
          {
            name: 'Plastic', //name on the dropdown
            url: '/carbon/plastic', //link of the route
            icon: 'icon-puzzle'
          },
          {
            name: 'Toys', //name on the dropdown
            url: '/carbon/toys', //link of the route
            icon: 'icon-puzzle'
          },
          {
            name: '8forerver', //name on the dropdown
            url: '/carbon/carbon', //link of the route
            icon: 'icon-puzzle'
          },


        ]
}

];
