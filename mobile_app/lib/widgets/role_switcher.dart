import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/role_provider.dart';
import '../screens/passenger_screen.dart';
import '../screens/driver_screen.dart';

class RoleSwitcher extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final roleProvider = Provider.of<RoleProvider>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text("Switch Role"),
        actions: [
          DropdownButton<String>(
            value: roleProvider.role,
            onChanged: (value) {
              if (value != null) roleProvider.switchRole(value);
            },
            items: [
              DropdownMenuItem(value: "passenger", child: Text("Passenger")),
              DropdownMenuItem(value: "driver", child: Text("Driver")),
            ],
          )
        ],
      ),
      body: roleProvider.role == "passenger" ? PassengerScreen() : DriverScreen(),
    );
  }
}
