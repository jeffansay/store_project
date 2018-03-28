export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'orange',
      text: 'info'
    }
  },
  {
    name: 'PointOfSale',
    url: '/pos',
    icon: 'fa fa-dollar ',
    badge: {
      variant: 'red',
      text: 'Find'
  }
},
  {
  name: 'Carbon Area',
    url: '/carbon',
      icon: 'fa fa-truck',
        children: [
          {
            name: 'Accessories', //name on the dropdown
            url: '/carbon/acc', //link of the route
            icon: 'fa fa-shopping-basket'
          },
          {
            name: 'Cebu Shoe-maker', //name on the dropdown
            url: '/carbon/sli', //link of the route
            icon: 'fa fa-shopping-basket'
          },
          {
            name: 'Plastic', //name on the dropdown
            url: '/carbon/plastic', //link of the route
            icon: 'fa fa-shopping-basket'
          },
          {
            name: 'Toys', //name on the dropdown
            url: '/carbon/toys', //link of the route
            icon: 'fa fa-shopping-basket'
          },
          {
            name: '8forerver', //name on the dropdown
            url: '/carbon/carbon', //link of the route
            icon: 'fa fa-shopping-basket'
          },


        ]
},
{
  name: 'Consignment',
    url: '/ciggar',
      icon: 'icon-tag',
        children: [
          {
            name: 'Marlboro', //name on the dropdown
            url: '/ciggar/marlboro', //link of the route
            icon: 'icon-tag'
          },
          {
            name: 'Mighty', //name on the dropdown
            url: '/ciggar/mighty', //link of the route
            icon: 'icon-tag'
          },




        ]
},

 {
      name: 'Taboan Area',
        url: '/taboan',
          icon: 'fa fa-truck',
          children: [
            {
              name: 'Buwad', //name on the dropdown
              url: '/taboan/buwad', //link of the route
              icon: 'fa fa-shopping-basket'
            },
            {
              name: 'Tessie', //name on the dropdown
              url: '/taboan/tessie', //link of the route
              icon: 'fa fa-shopping-basket'
            },

          ]
    },
      {
        name: 'Lañueva Area',
          url: '/cityhall',
            icon: 'fa fa-truck',
            children: [
              {
                name: 'Groceries', //name on the dropdown
                url: '/cityhall/lanueva', //link of the route
                icon: 'fa fa-shopping-basket'
              },
              {
                name: 'School Supplies', //name on the dropdown
                url: '/cityhall/schoolSupplies', //link of the route
                icon: 'fa fa-shopping-basket'
              },



            ]
      },
              {
          name: 'Load',
          url: '/loads',
          icon: 'fa fa-credit-card',
          badge: {
            variant: 'success',
            text: 'avail'
        }
        },
        {
        name: 'Search',
        url: '/search',
        icon: 'fa fa-google',
        badge: {
          variant: 'danger',
          text: 'Find'
      }
    },

];
