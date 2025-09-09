import 'package:flutter/material.dart';
import '../models/user.dart';
import 'passenger_dashboard.dart';
import 'driver_dashboard.dart';

class HomeScreen extends StatelessWidget {
  final User user;
  final String role;
  final Function(String) onSwitchRole;

  HomeScreen({required this.user, required this.role, required this.onSwitchRole});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Youkyouk - $role'),
        actions: [
          PopupMenuButton<String>(
            onSelected: (value) {
              onSwitchRole(value);
            },
            itemBuilder: (context) => [
              PopupMenuItem(value: "Passenger", child: Text("Passenger")),
              PopupMenuItem(value: "Driver", child: Text("Driver")),
            ],
            icon: Icon(Icons.swap_horiz),
          ),
        ],
      ),
      body: role == "Passenger"
          ? PassengerDashboard(user: user)
          : DriverDashboard(user: user),
    );
  }
}
