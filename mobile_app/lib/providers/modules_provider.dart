import 'package:flutter/material.dart';

class ModulesProvider with ChangeNotifier {
  bool vipEnabled = true;
  bool sharedEnabled = true;
  bool ecoEnabled = true;
  bool deliveryEnabled = true;

  void toggleModule(String module, bool value) {
    switch(module) {
      case "VIP": vipEnabled = value; break;
      case "Shared": sharedEnabled = value; break;
      case "Eco": ecoEnabled = value; break;
      case "Delivery": deliveryEnabled = value; break;
    }
    notifyListeners();
  }
}
