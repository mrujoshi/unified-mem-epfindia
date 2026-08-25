export interface Contribution {
  monthYear: string;
  employeeShare: number;
  employerShare: number;
  pensionShare: number;
  dateOfCredit: string;
}

export interface MemberPassbook {
  memberId: string;
  companyName: string;
  establishmentId: string;
  dateOfJoining: string;
  dateOfExit: string | null;
  totalEmployeeShare: number;
  totalEmployerShare: number;
  totalPensionShare: number;
  contributions: Contribution[];
}

export interface UserProfile {
  uan: string;
  name: string;
  dob: string;
  aadhaarStatus: 'Verified' | 'Pending';
  panStatus: 'Verified' | 'Pending';
  bankStatus: 'Verified' | 'Pending';
  memberIds: MemberPassbook[];
}

export const mockUser: UserProfile = {
  uan: "100987654321",
  name: "Ravi Kumar",
  dob: "15-Aug-1990",
  aadhaarStatus: 'Verified',
  panStatus: 'Verified',
  bankStatus: 'Verified',
  memberIds: [
    {
      memberId: "MHBAN00012340000000123",
      companyName: "TechCorp Solutions Pvt Ltd",
      establishmentId: "MHBAN0001234000",
      dateOfJoining: "01-Apr-2022",
      dateOfExit: null,
      totalEmployeeShare: 54000,
      totalEmployerShare: 16500,
      totalPensionShare: 37500,
      contributions: [
        { monthYear: "Jul 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Aug-2026" },
        { monthYear: "Jun 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Jul-2026" },
        { monthYear: "May 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Jun-2026" },
        { monthYear: "Apr 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-May-2026" },
        { monthYear: "Mar 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Apr-2026" },
        { monthYear: "Feb 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Mar-2026" },
        { monthYear: "Jan 2026", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Feb-2026" },
        { monthYear: "Dec 2025", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Jan-2026" },
        { monthYear: "Nov 2025", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Dec-2025" },
        { monthYear: "Oct 2025", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Nov-2025" },
      ]
    },
    {
      memberId: "KABAN00098760000000987",
      companyName: "Innovatech Startups",
      establishmentId: "KABAN0009876000",
      dateOfJoining: "01-Jan-2020",
      dateOfExit: null, // missing by default
      totalEmployeeShare: 43200,
      totalEmployerShare: 13200,
      totalPensionShare: 30000,
      contributions: [
        { monthYear: "Mar 2022", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Apr-2022" },
        { monthYear: "Feb 2022", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Mar-2022" },
        { monthYear: "Jan 2022", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Feb-2022" },
      ]
    },
    {
      memberId: "MHBAN00045670000000456",
      companyName: "First Job Enterprises",
      establishmentId: "MHBAN0004567000",
      dateOfJoining: "01-Jun-2018",
      dateOfExit: null, // intentionally missing to trigger error
      totalEmployeeShare: 21600,
      totalEmployerShare: 6600,
      totalPensionShare: 15000,
      contributions: [
        { monthYear: "Dec 2019", employeeShare: 1800, employerShare: 550, pensionShare: 1250, dateOfCredit: "15-Jan-2020" }
      ]
    }
  ]
};
