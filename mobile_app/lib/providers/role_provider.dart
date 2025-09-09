import 'package:flutter/material.dart';

class RoleProvider with ChangeNotifier {
  String role = "passenger"; // passenger or driver

  void switchRole(String newRole) {
    role = newRole;
    notifyListeners();
  }
}
