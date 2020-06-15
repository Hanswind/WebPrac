# 자동차
class Car:
    color = "black"
    speed = 0

    # n만큼의 속도 증가
    def speedUp(self, n):
        if n < 0:
            print("속도는 0 이상의 값만 입력해주세요")
        else:
            print("차의 현재 속도 {} 에서 {} 로 증가했습니다".format(self.speed, self.speed + n))
            self.speed += n

    # n만큼의 속도 감소
    def speedDown(self, n):
        if n < 0:
            print("속도는 0 이상의 값만 입력해주세요")
        else:
            print("차의 현재 속도 {} 에서 {} 로 감소했습니다".format(self.speed, self.speed + n))
            self.speed -= n

    # 현재 속도 출력
    def currentSpeed(self):
        print("현재 속도는 {} 입니다".format(self.speed))


# 승용차
class UserCar(Car):
    seat = 4

    # 부모 클래스의 메소드 덮어쓰기 예제 - Override (이런식으로 부모 클래스에서 정의한 메서드 덮어쓰기 가능)
    def currentSpeed(self):
        print("현재 승요차의 속도는 {} 입니다".format(self.speed))

    # 승용차 좌석수 출력
    def seatCount(self):
        print("승용차의 좌석수는 {} 개입니다.".format(self.seat))

# 트럭
class Truck(Car):
    storage = 5000

    # 트럭 적재량 출력
    def storageLarge(self):
        print("트럭의 적재량은 {} 입니다".format(self.storage))



# 실행문
userCar1 = UserCar() # 승용차 객체 생성
userCar1.speedUp(5)  # 이런식으로 부모 클래스에서 정의한 메서드 사용 가능
userCar1.speedUp(2)
userCar1.currentSpeed()
userCar1.seatCount()

truck = Truck()
truck.speedUp(10)
truck.currentSpeed()
truck.storageLarge()
