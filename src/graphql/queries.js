/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
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
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
          id
          name
          last_name
          phone_number
          email
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
          driverId
          createdAt
          updatedAt
        }
        updatedAt
        userOrdersId
        driverOrdersId
        carOrdersId
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
