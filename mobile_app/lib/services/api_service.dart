import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/user.dart';
import '../models/trip.dart';

class ApiService {
  final String baseUrl;

  ApiService({required this.baseUrl});

  Future<User?> login(String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      body: {'email': email, 'password': password},
    );
    if (response.statusCode == 200) {
      return User.fromJson(json.decode(response.body));
    }
    return null;
  }

  Future<List<Trip>> getTrips(String role, String countryId) async {
    final response = await http.get(Uri.parse('$baseUrl/trips?role=$role&country=$countryId'));
    if (response.statusCode == 200) {
      List data = json.decode(response.body);
      return data.map((e) => Trip.fromJson(e)).toList();
    }
    return [];
  }

  Future<List<String>> getModules(String countryId) async {
    final response = await http.get(Uri.parse('$baseUrl/modules?country=$countryId'));
    if (response.statusCode == 200) {
      List data = json.decode(response.body);
      return data.map<String>((e) => e['name'].toString()).toList();
    }
    return [];
  }
}
