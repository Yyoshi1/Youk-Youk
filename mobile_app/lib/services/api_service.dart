import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/trip_model.dart';

class ApiService {
  final String baseUrl = "http://localhost:4000";

  Future<List<TripModel>> getTrips() async {
    final res = await http.get(Uri.parse("$baseUrl/trips"));
    if (res.statusCode == 200) {
      final List data = json.decode(res.body);
      return data.map((e) => TripModel.fromJson(e)).toList();
    } else {
      throw Exception("Failed to fetch trips");
    }
  }

  Future<TripModel> createTrip(TripModel trip) async {
    final res = await http.post(
      Uri.parse("$baseUrl/trips"),
      headers: {"Content-Type": "application/json"},
      body: json.encode(trip.toJson()),
    );
    if (res.statusCode == 200) {
      return TripModel.fromJson(json.decode(res.body));
    } else {
      throw Exception("Failed to create trip");
    }
  }
}
