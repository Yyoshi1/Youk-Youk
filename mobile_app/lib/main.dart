import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/login_screen.dart';
import 'models/user.dart';

void main() {
  runApp(YoukyoukApp());
}

class YoukyoukApp extends StatefulWidget {
  @override
  _YoukyoukAppState createState() => _YoukyoukAppState();
}

class _YoukyoukAppState extends State<YoukyoukApp> {
  User? currentUser;
  String currentRole = "Passenger"; // الافتراضي راكب

  void switchRole(String role) {
    setState(() {
      currentRole = role;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Youkyouk',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: currentUser == null
          ? LoginScreen(onLogin: (user) {
              setState(() {
                currentUser = user;
              });
            })
          : HomeScreen(
              user: currentUser!,
              role: currentRole,
              onSwitchRole: switchRole,
            ),
    );
  }
}
