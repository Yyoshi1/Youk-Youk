import 'package:flutter/material.dart';

class CountrySelector extends StatelessWidget {
  final List<String> countries;
  final String selectedCountry;
  final Function(String) onSelect;

  CountrySelector({
    required this.countries,
    required this.selectedCountry,
    required this.onSelect,
  });

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: selectedCountry,
      onChanged: (value) {
        if (value != null) onSelect(value);
      },
      items: countries.map((country) {
        return DropdownMenuItem(value: country, child: Text(country));
      }).toList(),
    );
  }
}
