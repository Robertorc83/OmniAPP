/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
