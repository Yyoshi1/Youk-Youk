class TripModel {
  final int id;
  final String type;
  final String status;
  final String origin;
  final String destination;
  final double price;
  final String passenger;
  final String driver;
  final String vehicle;

  TripModel({
    required this.id,
    required this.type,
    required this.status,
    required this.origin,
    required this.destination,
    required this.price,
    required this.passenger,
    required this.driver,
    required this.vehicle,
  });

  factory TripModel.fromJson(Map<String, dynamic> json) {
    return TripModel(
      id: json['id'],
      type: json['type'],
      status: json['status'],
      origin: json['origin'],
      destination: json['destination'],
      price: json['price'].toDouble(),
      passenger: json['passenger'],
      driver: json['driver'] ?? "Unassigned",
      vehicle: json['vehicle'] ?? "N/A",
    );
  }

  Map<String, dynamic> toJson() => {
        "id": id,
        "type": type,
        "status": status,
        "origin": origin,
        "destination": destination,
        "price": price,
        "passenger": passenger,
        "driver": driver,
        "vehicle": vehicle,
      };
}
