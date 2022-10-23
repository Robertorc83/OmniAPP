/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      last_name
      phone_number
      email
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      reviews {
        items {
          title
          description
          stars
          userId
          driverId
          id
          createdAt
          updatedAt
          userReviewsId
          driverReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      last_name
      phone_number
      email
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      reviews {
        items {
          title
          description
          stars
          userId
          driverId
          id
          createdAt
          updatedAt
          userReviewsId
          driverReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      last_name
      phone_number
      email
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      reviews {
        items {
          title
          description
          stars
          userId
          driverId
          id
          createdAt
          updatedAt
          userReviewsId
          driverReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onCreateDriver(filter: $filter) {
      id
      name
      last_name
      phone_number
      email
      soat
      licence
      antecedentes
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      reviews {
        items {
          title
          description
          stars
          userId
          driverId
          id
          createdAt
          updatedAt
          userReviewsId
          driverReviewsId
        }
        nextToken
      }
      car {
        id
        type
        model
        year
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        driverId
        driver {
          id
          name
          last_name
          phone_number
          email
          soat
          licence
          antecedentes
          status
          payment_status
          createdAt
          updatedAt
          driverCarId
        }
        createdAt
        updatedAt
      }
      status
      payment_status
      createdAt
      updatedAt
      driverCarId
    }
  }
`;
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
      id
      name
      last_name
      phone_number
      email
      soat
      licence
      antecedentes
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      reviews {
        items {
          title
          description
          stars
          userId
          driverId
          id
          createdAt
          updatedAt
          userReviewsId
          driverReviewsId
        }
        nextToken
      }
      car {
        id
        type
        model
        year
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        driverId
        driver {
          id
          name
          last_name
          phone_number
          email
          soat
          licence
          antecedentes
          status
          payment_status
          createdAt
          updatedAt
          driverCarId
        }
        createdAt
        updatedAt
      }
      status
      payment_status
      createdAt
      updatedAt
      driverCarId
    }
  }
`;
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
      id
      name
      last_name
      phone_number
      email
      soat
      licence
      antecedentes
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      reviews {
        items {
          title
          description
          stars
          userId
          driverId
          id
          createdAt
          updatedAt
          userReviewsId
          driverReviewsId
        }
        nextToken
      }
      car {
        id
        type
        model
        year
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        driverId
        driver {
          id
          name
          last_name
          phone_number
          email
          soat
          licence
          antecedentes
          status
          payment_status
          createdAt
          updatedAt
          driverCarId
        }
        createdAt
        updatedAt
      }
      status
      payment_status
      createdAt
      updatedAt
      driverCarId
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
      id
      type
      model
      year
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
      id
      type
      model
      year
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
      id
      type
      model
      year
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          price
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          driverId
          carId
          updatedAt
          userOrdersId
          driverOrdersId
          carOrdersId
        }
        nextToken
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      createdAt
      type
      status
      price
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        name
        last_name
        phone_number
        email
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      carId
      car {
        id
        type
        model
        year
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        driverId
        driver {
          id
          name
          last_name
          phone_number
          email
          soat
          licence
          antecedentes
          status
          payment_status
          createdAt
          updatedAt
          driverCarId
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      driverOrdersId
      carOrdersId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      createdAt
      type
      status
      price
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        name
        last_name
        phone_number
        email
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      carId
      car {
        id
        type
        model
        year
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        driverId
        driver {
          id
          name
          last_name
          phone_number
          email
          soat
          licence
          antecedentes
          status
          payment_status
          createdAt
          updatedAt
          driverCarId
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      driverOrdersId
      carOrdersId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      createdAt
      type
      status
      price
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        name
        last_name
        phone_number
        email
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      carId
      car {
        id
        type
        model
        year
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        driverId
        driver {
          id
          name
          last_name
          phone_number
          email
          soat
          licence
          antecedentes
          status
          payment_status
          createdAt
          updatedAt
          driverCarId
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      driverOrdersId
      carOrdersId
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
      title
      description
      stars
      userId
      user {
        id
        name
        last_name
        phone_number
        email
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      id
      createdAt
      updatedAt
      userReviewsId
      driverReviewsId
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
      title
      description
      stars
      userId
      user {
        id
        name
        last_name
        phone_number
        email
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      id
      createdAt
      updatedAt
      userReviewsId
      driverReviewsId
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
      title
      description
      stars
      userId
      user {
        id
        name
        last_name
        phone_number
        email
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      driverId
      driver {
        id
        name
        last_name
        phone_number
        email
        soat
        licence
        antecedentes
        orders {
          nextToken
        }
        reviews {
          nextToken
        }
        car {
          id
          type
          model
          year
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
        }
        status
        payment_status
        createdAt
        updatedAt
        driverCarId
      }
      id
      createdAt
      updatedAt
      userReviewsId
      driverReviewsId
    }
  }
`;
